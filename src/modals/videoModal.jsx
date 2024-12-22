import React, { useState } from 'react';
import { Dialog, DialogBody, Card } from "@material-tailwind/react";

function VideoDialog({ videoLink, thumbLink }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <div className='w-full'>
            <Card
                className="h-full w-2/3 mx-[13rem] -mt-[1rem] justify-center items-center mb-[2rem] cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
                onClick={handleOpen}
            >
                <img className="h-full w-full object-cover object-center" src={thumbLink} alt="Video Thumbnail" />

            </Card>
            <Dialog className="mt-16 ml-[15rem] w-[50rem]" size="xl" open={open} handler={handleOpen}>
                <DialogBody>
                    <iframe
                        className="h-[30rem] w-full rounded-lg object-cover object-center"
                        src={videoLink}
                        title="YouTube Video"
                        allowFullScreen
                    ></iframe>
                </DialogBody>
            </Dialog>
        </div>
    );
}

export default VideoDialog;
