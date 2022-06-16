import React from 'react'
import { PlayArrow, SkipNext, SkipPrevious, Pause } from '@mui/icons-material'

function Song() {
    return (
      <div className="flex">
        <main className="flex-col m-auto">
          <p className="flex">Test</p>
          <div className='flex'>
            <SkipPrevious className="flex m-auto h-10 w-10" />
            <PlayArrow className="flex m-auto h-14 w-14 mx-3" />
            <SkipNext className="flex m-auto h-10 w-10" />
          </div>
        </main>
      </div>
    );
}

export default Song
