'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Chatbot = () => {
  const inpref = useRef<any>();
  const chatBotRef = useRef<any>();

  const [role, setrole] = useState('');
  const [output, setoutput] = useState('');
  const [userMsg, setuserMsg] = useState('');
  const [userRole, setuserRole] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const [changeBot, setchangeBot] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        chatBotRef.current &&
        !chatBotRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const generateText = async (e) => {
    e.preventDefault();
    const inpValue = inpref.current.value;
    setuserMsg(inpValue);
    setuserRole('You');
    setrole('AI');
    setoutput('');

    const res: any = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ body: inpValue }),
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      setoutput((prev) => prev + chunk);
    }

    inpref.current.value = '';
  };
  return (
    <>
      <div
        ref={chatBotRef}
        className="fixed bottom-10 right-3 z-50 md:right-10"
      >
        {changeBot && isOpen ? (
          <>
            <div className="mb-4 w-full">
              <div className="flex h-[28rem] max-w-xs flex-col overflow-hidden rounded-lg md:max-w-sm">
                <div className="w-full bg-yellow-100 py-2 text-center text-xl font-medium">
                  Messages
                </div>

                <div className="flex h-full w-full flex-col justify-end bg-white p-3 pb-4 shadow-lg">
                  <div className="mb-2 h-full w-full overflow-x-hidden overflow-y-scroll">
                    {userMsg == '' && (
                      <div className="flex h-full items-end justify-center p-6 text-center font-semibold text-neutral-500">
                        No Messages Yet..
                      </div>
                    )}
                    <div className="text-md mb-5 ml-auto flex w-fit max-w-[80%] flex-col gap-1 break-words rounded-xl bg-[rgb(202,138,4)] p-2 px-3 font-medium text-white">
                      {userRole && <>{userMsg}</>}
                    </div>
                    <div className="flex w-fit max-w-[80%] flex-col gap-1 rounded-xl bg-gray-100 p-2 px-3 text-start text-sm">
                      {role && (
                        <>
                          {output === '' ? (
                            <p>...</p>
                          ) : (
                            <ReactMarkdown>{output}</ReactMarkdown>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  <form
                    onSubmit={generateText}
                    className={output ? 'mb-10 flex gap-2' : 'flex gap-2'}
                  >
                    <input
                      type="text"
                      ref={inpref}
                      className="flex-1 rounded-md border border-gray-400 bg-white px-2 outline-none"
                      placeholder="Type your message..."
                    />
                    <button
                      type="submit"
                      className="rounded-md bg-[rgb(202,138,4)] px-3 py-2 text-white"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-2 w-full rounded-md bg-[rgb(202,138,4)]">
              {isOpen && (
                <div className="h-[350px] max-w-xs md:max-w-sm">
                  <div className="bg-red-5 flex h-full !w-full flex-col justify-end rounded-lg rounded-b-md p-5 shadow-lg">
                    <div className="mb-2 h-full w-full overflow-y-scroll">
                      <div className="text-md mb-5 flex w-full flex-col gap-5 break-words text-start">
                        <h1 className="text-3xl font-bold text-white">Hi 👋</h1>
                        <p className="text-xl text-white">
                          Are you looking for a partner that can bring your Idea
                          into reality? Let’s discuss your Idea and bring it
                          into action.
                        </p>
                        <button
                          className="w-full rounded-md bg-white p-2"
                          onClick={() => setchangeBot(() => true)}
                        >
                          Let's chat
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
        <div className="flex items-center justify-end">
          <button
            onClick={() => {
              setIsOpen((prev) => !prev), setchangeBot(false);
            }}
            className="flex h-14 w-14 animate-float items-center justify-center rounded-full bg-[rgb(202,138,4)] text-3xl font-bold text-white shadow-xl"
          >
            {isOpen ? (
              <p>X</p>
            ) : (
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 28 32"
                width="28"
                height="32"
              >
                <path
                  fill="white"
                  d="M28,32 C28,32 23.2863266,30.1450667 19.4727818,28.6592 L3.43749107,28.6592 C1.53921989,28.6592 0,27.0272 0,25.0144 L0,3.6448 C0,1.632 1.53921989,0 3.43749107,0 L24.5615088,0 C26.45978,0 27.9989999,1.632 27.9989999,3.6448 L27.9989999,22.0490667 L28,22.0490667 L28,32 Z M23.8614088,20.0181333 C23.5309223,19.6105242 22.9540812,19.5633836 22.5692242,19.9125333 C22.5392199,19.9392 19.5537934,22.5941333 13.9989999,22.5941333 C8.51321617,22.5941333 5.48178311,19.9584 5.4277754,19.9104 C5.04295119,19.5629428 4.46760991,19.6105095 4.13759108,20.0170667 C3.97913051,20.2124916 3.9004494,20.4673395 3.91904357,20.7249415 C3.93763774,20.9825435 4.05196575,21.2215447 4.23660523,21.3888 C4.37862552,21.5168 7.77411059,24.5386667 13.9989999,24.5386667 C20.2248893,24.5386667 23.6203743,21.5168 23.7623946,21.3888 C23.9467342,21.2215726 24.0608642,20.9827905 24.0794539,20.7254507 C24.0980436,20.4681109 24.0195551,20.2135019 23.8614088,20.0181333 Z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
