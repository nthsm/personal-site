'use client'

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type SidebarContextType = {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
  hasMounted: boolean;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isCollapsed, setIsCollapsedState] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const storedIsCollapsed = localStorage.getItem('isCollapsed');
    if (storedIsCollapsed !== null) {
      setIsCollapsedState(JSON.parse(storedIsCollapsed));
    }
    setHasMounted(true);
  }, []);

  const setIsCollapsed = (value: boolean) => {
    if (hasMounted) {
      setIsCollapsedState(value);
      localStorage.setItem('isCollapsed', JSON.stringify(value));
    }
  };

  const value = { isCollapsed, setIsCollapsed, hasMounted };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};