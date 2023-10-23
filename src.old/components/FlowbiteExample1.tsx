'use client';

import { Button, Modal } from 'flowbite-react';

import { useState } from 'preact/hooks';





export interface FlowbiteExampleProps {

}

export const FlowbiteExample1 = (props: FlowbiteExampleProps) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    // select the two elements that we'll work with

    // modal.show();
    // modal.hide();
    return (
        <>
            <button id="pestoButton" type="button" onClick={() => {
                setIsOpened(true)
            }
            } class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Open</button>

            {// ------------------------------------------------------------------
            }
            <Modal show={isOpened} onClose={() => setIsOpened(false)}>
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                            companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
                            ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
                            possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        setIsOpened(false)
                    }}>I accept</Button>
                    <Button color="gray" onClick={
                        () => {
                            setIsOpened(false)
                        }
                    }>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FlowbiteExample1;