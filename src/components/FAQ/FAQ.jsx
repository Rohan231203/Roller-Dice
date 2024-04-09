const FAQ = () => {
  return (
    <div className="faq-section w-5/6 px-[5rem] py-[3rem] flex flex-col items-center gap-8">
      <h1 className="text-white text-2xl">Frequently Asked Questions</h1>
      <div className="flex flex-col gap-4">
        <div className="collapse collapse-plus bg-base-200 w-full">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse  collapse-plus bg-base-200 w-full">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse  collapse-plus bg-base-200 w-full">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
