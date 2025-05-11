"use client"

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ContactForm, ContactFormSEO } from '@/components/contact-form';

interface ContactModalProps {
  triggerClassName?: string;
  buttonText?: string;
}

export function ContactModal({ 
  triggerClassName = "", 
  buttonText = "Contact Me" 
}: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile when component mounts and on window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is a common breakpoint for tablets
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  // Handle form submission success
  const handleSuccess = () => {
    setTimeout(() => setIsOpen(false), 1000); // Close after 1 second
  };

  // Mobile drawer component
  if (isMobile) {
    return (
      <>
        {/* Hidden SEO form for crawlers */}
        <div className="hidden">
          <ContactFormSEO />
        </div>
        
        <Drawer open={isOpen} onOpenChange={handleOpenChange}>
          <DrawerTrigger asChild>
            <Button className={triggerClassName}>{buttonText}</Button>
          </DrawerTrigger>
          <DrawerContent className="h-[85vh]">
            <DrawerHeader className="sticky top-0 z-10 bg-background pt-4 pb-3 border-b">
              <div className="flex items-center justify-between">
                <DrawerTitle>Contact James</DrawerTitle>
                <DrawerClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                  </Button>
                </DrawerClose>
              </div>
            </DrawerHeader>
            <div className="p-4 pb-8">
              <ContactForm onSuccess={handleSuccess} />
            </div>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  // Desktop dialog component
  return (
    <>
      {/* Hidden SEO form for crawlers */}
      <div className="hidden">
        <ContactFormSEO />
      </div>
      
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button className={triggerClassName}>{buttonText}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Contact James</DialogTitle>
            {/* Removed the duplicate close button that was here */}
          </DialogHeader>
          <div className="py-2">
            <ContactForm onSuccess={handleSuccess} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
