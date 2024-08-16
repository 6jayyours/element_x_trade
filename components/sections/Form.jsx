"use client";

import {
  ArrowRightIcon,
  Building,
  MessageSquare,
  UserCheck,
  UserRoundCheck,
} from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/** First name */}
      <div className="relative flex items-center">
        <Input type="name" id="first name" placeholder="First Name" />
        <UserCheck className="absolute right-6" size={20} />
      </div>

      {/** Last name */}
      <div className="relative flex items-center">
        <Input type="name" id="last name" placeholder="Last Name" />
        <UserRoundCheck className="absolute right-6" size={20} />
      </div>

      {/** Email*/}
      <div className="relative flex items-center">
        <Input type="email" id="first name" placeholder="Email" />
        <Building className="absolute right-6" size={20} />
      </div>

      {/** Textarea*/}
      <div className="relative flex items-center">
        <Textarea placeholder="Your Message Here..." />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>

      <Button className="flex items-center gap-x-1 max-w-[200px]">
        Request a quote
        <ArrowRightIcon size={20}/>
      </Button>
    </form>
  );
};

export default Form;
