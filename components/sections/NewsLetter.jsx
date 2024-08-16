import React from "react";
import { RiMenFill } from "react-icons/ri";
import { CalendarDaysIcon, HandHelpingIcon } from "lucide-react";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";

const NewsLetter = () => {
  return (
    <section>
      <div className="relative bg-tertiary overflow-hidden py-16 sm:py-24 lg:px-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 ">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight section-title sm:text-4xl">
                How Can We Help You?
              </h2>
              <p className="mt-4 text-lg leading-8 subtitle">
                We’re committed to delivering the best possible service and
                value to our clients. Your feedback is crucial to helping us
                enhance our offerings and better meet your needs. Please share
                your thoughts on how we can improve our services, whether it's
                through streamlining processes, offering new solutions, or
                addressing specific challenges you face.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4 ">
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email"
                />
                <Link href="/bid">
                  <Button>
                    Subscribe <RiMenFill size={18} />
                  </Button>
                </Link>
              </div>
            </div>

            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">

              <div className="flex flex-col items-start">
                <div className="bg-primary p-2 ring-1 ring-white/10 rounded-full">
                  <CalendarDaysIcon className="h-6 w-6 text-white" />
                </div>
                <dt className="mt-4 font-semibold text-muted-foreground">Weekly Articles</dt>
                <dd className="mt-2 leading-7 ">
                  We’re committed to delivering the best possible service and
                  value to our clients. Your feedback is crucial to helping us
                  enhance our offerings and better meet your needs.
                </dd>
              </div>

              <div className="flex flex-col items-start">
                <div className="bg-primary p-2 ring-1 ring-white/10 rounded-full">
                  <HandHelpingIcon className="h-6 w-6 text-white" />
                </div>
                <dt className="mt-4 font-semibold text-muted-foreground">Upcoming</dt>
                <dd className="mt-2 leading-7 ">
                  We’re committed to delivering the best possible service and
                  value to our clients. Your feedback is crucial to helping us
                  enhance our offerings and better meet your needs.
                </dd>
              </div>

            


            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
