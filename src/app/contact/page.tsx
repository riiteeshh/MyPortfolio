import ContactPage from "@/components/pages/contact-page/contact-page";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Let's get connected",
  };
export default function Contacts(){
    return <ContactPage/>
}