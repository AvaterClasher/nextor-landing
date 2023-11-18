/** @format */

import { IoLogoApple } from "react-icons/io";
import { RiGithubFill, RiWindowsFill } from "react-icons/ri";
import { SiLinux } from "react-icons/si";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

export default function DownloadBtns() {
  return (
    <>
      <span className="btn space-x-2">
        <RiWindowsFill />{" "}
        <a href="https://github.com/AvaterClasher/nextor/releases/download/main/nextor_0.0.0_x64-setup.exe.msi">
          <span>Window</span>
        </a>
      </span>
      <span className="btn space-x-2">
        <IoLogoApple />{" "}
        <AlertDialog>
          <AlertDialogTrigger>MacOS</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Downloading MacOS</AlertDialogTitle>
              <AlertDialogDescription>
                To install the app for MacOS please download the source code
                from github and build the app using <b>yarn tauri dev</b> for
                development and <br />
                <b>yarn tauri build</b> for building the app for daily usage.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </span>
      <span className="btn space-x-2">
        <SiLinux />{" "}
        <a href="https://github.com/AvaterClasher/nextor/releases/download/main/nextor_0.0.0_amd64.AppImage">
          <span>Linux</span>
        </a>
      </span>
      <span
        className="btn space-x-2"
        onClick={() =>
          (window.location.href = "https://github.com/AvaterClasher/nextor")
        }
      >
        <RiGithubFill /> <span>Source code</span>
      </span>
    </>
  );
}
