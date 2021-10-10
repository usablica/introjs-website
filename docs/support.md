---
title: Support
---

If you can’t find your answer from the documentation and examples page, you can use the support to find the appropriate solution.

## Community support

If you are using the open-source license of Introjs, you can use [Github issues](https://github.com/usablica/intro.js/issues) or [Stackoverflow](http://stackoverflow.com/questions/tagged/intro.js) to ask your question and get an answer from the community.

## Commercial support

First of all, please consider obtaining a license for your Introjs instance if you haven’t already. Then contact us using following email and our team will help you to get your answers.

*   Do you need any help to set up your **Intro.js**?
*   Do you want to customize your **Intro.js**?
*   Do you have any questions about the library?

Fill our this form to send us a message or send us an email at [support@introjs.com](mailto:support@introjs.com).

## Send us a message

<form
  action="https://nocodeform.io/f/6162c626db436bbde7f89329"
  method="POST"
  className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
>
  <div>
    <label
      htmlFor="full-name"
      className="block text-sm font-medium text-gray-900"
    >
      Full name
    </label>
    <div className="mt-1">
      <input
        type="text"
        name="full-name"
        id="full-name"
        autoComplete="given-name"
        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
        required
      />
    </div>
  </div>
  <div>
    <label
      htmlFor="email"
      className="block text-sm font-medium text-gray-900"
    >
      Email
    </label>
    <div className="mt-1">
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
        required
      />
    </div>
  </div>
  <div className="sm:col-span-2">
    <label
      htmlFor="subject"
      className="block text-sm font-medium text-gray-900"
    >
      Subject
    </label>
    <div className="mt-1">
      <input
        type="text"
        name="subject"
        id="subject"
        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
      />
    </div>
  </div>
  <div className="sm:col-span-2">
    <div className="flex justify-between">
      <label
        htmlFor="message"
        className="block text-sm font-medium text-gray-900"
      >
        Message
      </label>
      <span id="message-max" className="text-sm text-gray-500">
          Max. 500 characters
        </span>
    </div>
    <div className="mt-1">
        <textarea
          id="message"
          name="message"
          rows={4}
          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
          aria-describedby="message-max"
          defaultValue={""}
          required
        />
    </div>
  </div>
  <div className="sm:col-span-2 sm:flex sm:justify-end">
    <button
      type="submit"
      className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto"
    >
      Submit
    </button>
  </div>
</form>
