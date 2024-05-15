import React from "react";

function Faq() {
  return (
    <section className="flex w-screen md:min-w-screen flex-col md:flex-row justify-between rounded-lg bg-[#2AA7FF] px-20 pb-8 pt-10">
      <div className="w-full md:w-2/6 mb-4 md:mb-0">
        <p className="text-xl font-semibold">Questions and answers about login</p>
      </div>
      <div className="w-full md:w-3/4">
        <details className="relative mb-1 rounded border border-slate-100 bg-none px-3 pb-3 pt-2 duration-300 open:bg-white open:shadow-lg">
          <summary className="relative cursor-pointer list-none pr-7 text-sm font-semibold">
            Do I have to allow the use of cookies?
            <div className="visible absolute right-0 top-0 cursor-pointer rounded-full bg-slate-200 px-1 py-0.5 open:invisible">
              <svg
                className="h-5 w-4 text-pink-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
               
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </summary>
          <p className="pt-3 text-xs">
            Yes, in order to use My Page, you must allow the use of cookies in your browser.<br /><br />
            See also: What is a cookie and what does it do?
          </p>
        </details>
        <details className="relative mb-1 rounded border border-slate-200 bg-none px-3 pb-3 pt-2 duration-300 open:bg-white open:shadow-lg">
          <summary className="relative cursor-pointer list-none pr-7 text-sm font-semibold">
            How do I change my My Page Password?
            <div className="visible absolute right-0 top-0 cursor-pointer rounded-full bg-slate-200 px-1 py-0.5 open:invisible">
              <svg
                className="h-5 w-4 text-pink-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </summary>
          <p className="pt-3 text-xs">
            Yes, in order to use My Page, you must allow the use of cookies in your browser.<br /><br />
            See also: What is a cookie and what does it do?
          </p>
        </details>
        <details className="relative mb-1 rounded border border-slate-200 bg-none px-3 pb-3 pt-2 duration-300 open:bg-white open:shadow-lg">
          <summary className="relative cursor-pointer list-none pr-7 text-sm font-semibold">
            What is BankID?
            <div className="visible absolute right-0 top-0 cursor-pointer rounded-full bg-slate-200 px-1 py-0.5 open:invisible">
              <svg
                className="h-5 w-4 text-pink-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </summary>
          <p className="pt-3 text-xs">
            Yes, in order to use My Page, you must allow the use of cookies in your browser.<br /><br />
            See also: What is a cookie and what does it do?
          </p>
        </details>
        <details className="relative mb-1 rounded border border-slate-200 bg-none px-3 pb-3 pt-2 duration-300 open:bg-white open:shadow-lg">
          <summary className="relative cursor-pointer list-none pr-7 text-sm font-semibold">
            Whose birth number can I use?
            <div className="visible absolute right-0 top-0 cursor-pointer rounded-full bg-slate-200 px-1 py-0.5 open:invisible">
              <svg
                className="h-5 w-4 text-pink-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
               
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </summary>
          <p className="pt-3 text-xs">
            Yes, in order to use My Page, you must allow the use of cookies in your browser.<br /><br />
            See also: What is a cookie and what does it do?
          </p>
        </details>
        <details className="relative mb-1 rounded border border-slate-200 bg-none px-3 pb-3 pt-2 duration-300 open:bg-white open:shadow-lg">
          <summary className="relative cursor-pointer list-none pr-7 text-sm font-semibold">
            When do I receive a password ordered by letter?
            <div className="visible absolute right-0 top-0 cursor-pointer rounded-full bg-slate-200 px-1 py-0.5 open:invisible">
              <svg
                className="h-5 w-4 text-pink-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
            
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </summary>
          <p className="pt-3 text-xs">
            Yes, in order to use My Page, you must allow the use of cookies in your browser.<br /><br />
            See also: What is a cookie and what does it do?
          </p>
        </details>
      </div>
    </section>
  );
}

export default Faq;
