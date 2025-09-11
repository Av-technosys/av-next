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
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(202,138,4)] text-3xl font-bold text-white shadow-xl md:h-14 md:w-14"
          >
            {isOpen ? (
              <p>X</p>
            ) : (
              <Image
                src="/chatboticon.svg"
                alt="chatbot icon"
                className="p-3 md:p-3"
                width={300}
                height={300}
              />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
