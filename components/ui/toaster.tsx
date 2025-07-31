"use client"
import React, { useState, useEffect } from "react";

// Simple stub hook - replace or move to hooks/use-toast.ts as needed
export function useToast() {
  type ToastType = {
    id: string;
    title?: string;
    description?: string;
    action?: React.ReactNode;
  };

  const [toasts, setToasts] = useState<ToastType[]>([]);

  // Example toast on mount, remove this in production
  useEffect(() => {
    setToasts([
      {
        id: "1",
        title: "Welcome!",
        description: "This is a sample toast message.",
      },
    ]);
  }, []);

  return { toasts, setToasts };
}

// Stub Toast UI components - replace with your actual UI components
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>{children}</div>
);
export const Toast: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div style={{ border: "1px solid black", padding: "10px", marginBottom: "5px" }} {...props}>
    {children}
  </div>
);
export const ToastTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <strong>{children}</strong>
);
export const ToastDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p>{children}</p>
);
export const ToastClose: React.FC = () => (
  <button style={{ marginLeft: "auto" }}>Close</button>
);
export const ToastViewport: React.FC = () => null;

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        ...props
      }: {
        id: string;
        title?: string;
        description?: string;
        action?: React.ReactNode;
        [key: string]: any;
      }) {
        return (
          <Toast key={id} {...props}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
