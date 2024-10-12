"use client";
import { SearchManufactureProps } from '@/types';
import React, { Fragment, useState } from 'react';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react';
import Image from 'next/image';
import { manufacturers } from '@/constants';

const SearchManufacture = ({ manufacturer, setManufacturer }: SearchManufactureProps) => {
    const [query, setQuery] = useState('');

    const filterManufacturers = 
      query === ""
        ? manufacturers
        : manufacturers.filter((item) => (
            item.toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
          ));
  
  return (
    <div className='search-manufacture'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
            <ComboboxButton className="absolute top-[14px]">
                <Image
                    src="/car-logo.svg"
                    width={20}
                    height={20}
                    className='ml-4'
                    alt='car logo'
                />
            </ComboboxButton>

            <ComboboxInput
                className="search-manufacturer__input"
                placeholder="Volkswagen"
                displayValue={(manufacturer: string) => manufacturer}
                onChange={(e) => setQuery(e.target.value)}
            />

            <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={() => setQuery('')}
            >
                <ComboboxOptions>
                  {filterManufacturers.length === 0 && query !== "" ? (
                    <div className="search-manufacturer__no-results">
                      No results found.
                    </div>
                  ) : (
                    filterManufacturers.map((item) => (
                      <ComboboxOption
                        key={item}
                        value={item}
                        className={({ active }) => `relative search-manufacturer__option ${
                          active ? 'bg-blue-500 text-white' : 'text-gray-900'
                        }`}
                      >
                        {({ selected, active }) => (
                          <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                            {item}
                          </span>
                        )}
                      </ComboboxOption>
                    ))
                  )}
                </ComboboxOptions>
            </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacture;
