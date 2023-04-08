import React from "react";
import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
 

interface DeleteBtn {
  open:boolean,
  handleOpen:any,
  deleteUser:any,
  userSelect:any
  refetch:any
}
const DeleteModal:React.FC<DeleteBtn> = (props) => {
  const userSelectId = props.userSelect.id
  return (
    <Fragment>
      <Dialog open={props.open} handler={props.handleOpen}>
        <DialogHeader>حذف کاربر</DialogHeader>
        <DialogBody divider>
            آیا از حذف کاربر با نام و نشان فلان مطمئن هستید؟
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="blue"
            onClick={props.handleOpen}
            className="ml-1"
          >
            <span>خیر</span>
          </Button>
          <Button variant="gradient" color="red" onClick={async(e)=>{
            await props.deleteUser(userSelectId)
            props.refetch()
            toast("کاربر حذف شد")
            props.handleOpen()
            }}>
            <span>بله</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}

export default DeleteModal