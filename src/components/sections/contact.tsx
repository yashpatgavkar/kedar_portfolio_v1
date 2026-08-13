"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="mx-auto min-h-screen w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeader id='contact' className="relative mb-14" title={
        <>
          LET&apos;S WORK <br />
          TOGETHER
        </>} />
      <div className="relative z-[2] mx-auto w-full max-w-3xl">
        <Card className="mt-8 w-full rounded-xl bg-white/70 backdrop-blur-sm dark:bg-black/70 sm:mt-10 md:mt-16">
          <CardHeader className="px-4 sm:px-6">
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl">Contact Form</CardTitle>
            <CardDescription>
              Please contact me directly at{" "}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="cursor-can-hover break-all rounded-lg text-foreground underline underline-offset-4"
              >
                {config.email.replace(/@/g, "(at)")}
              </a>{" "}
              or drop your info here.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
