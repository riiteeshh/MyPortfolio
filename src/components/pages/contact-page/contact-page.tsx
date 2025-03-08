"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { ContactForm } from "@/app/types";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
export default function ContactForm() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsSending(true);
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setIsSending(false);
      if (res.status !== 200) throw new Error("Failed")
        toast.success("Email sent successfully")

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
    } catch {
      setIsSending(false);
      toast.error("Some eror occured while sending email")

    } finally {
      setIsSending(false);
    }
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="w-full max-w-2xl bg-black p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">
          Let&apos;s Get Connected
        </h2>
        <p className="text-center mb-6 text-gray-400">
          For all enquiries, please email me using the form below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-1/2 p-3 bg-[#111111] text-[#CCCCCC] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-1/2 p-3 bg-[#111111] text-[#CCCCCC] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 bg-[#111111] text-[#CCCCCC] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-[#111111] text-[#CCCCCC] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 h-32 resize-none"
            required
          />
          <Button
            disabled={isSending}
            type="submit"
            className="w-full bg-[#E63946] text-white py-3 rounded-md font-bold hover:bg-red-600 transition-all"
          >
            <div className="gap-2 flex">
              {isSending && (
                <Loader2 className="animate-spin self-center" size={18} />
              )}
              Submit
            </div>
          </Button>
        </form>
      </div>
    </div>
  );
}
