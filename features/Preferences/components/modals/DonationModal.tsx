'use client';

import { ActionButton } from '@/shared/components/ui/ActionButton';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Heart, X } from 'lucide-react';
import { useCallback } from 'react';
import { useClick } from '@/shared/hooks/useAudio';

interface DonationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function DonationModal({
  open,
  onOpenChange,
}: DonationModalProps) {
  const { playClick } = useClick();

  const handleClose = useCallback(() => {
    playClick();
    onOpenChange(false);
  }, [playClick, onOpenChange]);

  if (!open) return null;

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal forceMount>
        <DialogPrimitive.Overlay className='fixed inset-0 z-50 bg-black/80' />
        <DialogPrimitive.Content
          className='fixed top-1/2 left-1/2 z-50 flex w-[95vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 flex-col gap-0 overflow-hidden rounded-2xl border-0 border-(--border-color) bg-(--background-color) p-0'
          onOpenAutoFocus={e => e.preventDefault()}
        >
          <div className='flex items-center justify-between border-b border-(--border-color) bg-(--background-color) px-6 py-5'>
            <DialogPrimitive.Title className='text-2xl font-semibold text-(--main-color)'>
              A small favor, if you can
            </DialogPrimitive.Title>
            <button
              onClick={handleClose}
              className='shrink-0 rounded-xl p-2 hover:cursor-pointer hover:bg-(--card-color)'
            >
              <X size={24} className='text-(--secondary-color)' />
            </button>
          </div>

          <div className='space-y-6 px-6 py-6'>
            <div className='space-y-4 text-(--main-color)'>
              <p className='text-lg leading-7 text-(--secondary-color)'>
                If KanaDojo has been a helpful companion in your studies, we
                would be deeply grateful if you ever felt able to support it
                with a donation.
              </p>
              <p className='text-base leading-7 text-(--secondary-color)'>
                From day one, we have poured care into making this a fully
                free, open-source, and ad-free learning resource for everyone
                — a sincere alternative to Duolingo that respects learners,
                and we are wholeheartedly committed to keeping it that way
                forever.
              </p>
              <p className='text-base leading-7 text-(--secondary-color)'>
                Even the smallest gift means a great deal to us, helping us
                keep KanaDojo welcoming, accessible, and lovingly maintained
                for the people who rely on it.
              </p>
            </div>

            <div className='flex flex-col gap-3 sm:flex-row'>
              <ActionButton
                colorScheme='main'
                borderColorScheme='main'
                borderRadius='2xl'
                borderBottomThickness={14}
                href='https://ko-fi.com/kanadojo'
                target='_blank'
                rel='noreferrer noopener'
                onClick={playClick}
                className='px-5 py-4 text-lg font-semibold sm:w-auto'
              >
                <Heart className='size-5 fill-current animate-[jump_1s_ease-in-out_infinite]' />
                Donate on Ko-fi
                <svg
                  aria-hidden='true'
                  viewBox='0 0 24 24'
                  className='size-5'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M7 17L17 7' />
                  <path d='M9 7h8v8' />
                </svg>
              </ActionButton>
              <button
                type='button'
                onClick={handleClose}
                className='inline-flex items-center justify-center rounded-2xl px-5 py-4 text-lg font-medium text-(--secondary-color) transition-colors hover:cursor-pointer hover:bg-(--background-color)'
              >
                Maybe later
              </button>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
