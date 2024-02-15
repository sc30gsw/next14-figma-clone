'use client'

import React, { ReactNode } from 'react'

import { ClientSideSuspense } from '@liveblocks/react'
import { RoomProvider } from '../../liveblocks.config'

export const Room = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <RoomProvider id="my-room" initialPresence={{}}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  )
}
