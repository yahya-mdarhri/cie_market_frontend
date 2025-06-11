import { useEffect } from 'react';


// this hook is used to change the page title
export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
} 