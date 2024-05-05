import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

const Contact = () => {
  return (
    <section className="h-screen flex items-center justify-center p-12">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Contact Me !!
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Subject
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Message
            </Typography>
            <Textarea
              label="Message"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
          </div>

          <Button className="mt-6" fullWidth>
            Send
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default Contact;
