'use client';
import React from "react";
import {Input} from '@/components/ui/input'
import { useSearchParams, useRouter } from "next/navigation";
import {useDebouncedCallback} from 'use-debounce';
import {useState , useEffect} from 'react';

function NavSearch() {
  const searchParams = useSearchParams();
  const {replace} = useRouter();

  const [search , setSearch] = useState(searchParams.get('search')?.toString() || '');

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if(value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`/posts?${params}`);
  } , 500)
  const searchingParams = searchParams.get('search');
  useEffect(() => {
    if(!searchParams.get('search')) {
      setSearch('');
    }
  }, [searchParams])

  return (
    <Input
      type="search"
      placeholder="Cauta dupa oras sau judet"
      className="max-w-md dark:bg-muted hidden lg:block md:block"
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      value={search}
    />
      
    
  );
}

export default NavSearch;
