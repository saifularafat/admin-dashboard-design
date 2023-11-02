import { BiDotsVertical } from "react-icons/bi";
import { BsCheckLg, BsChevronDoubleDown } from "react-icons/bs";
import PaymentInfoCart from "./PaymentInfoCart";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";

const Transactions = () => {
    return (
        <>
            <div className="flex items-center justify-between px-2">
                <h2 className="text-lg font-medium tracking-wide">Transactions</h2>
                <BiDotsVertical className="text-lg" />
            </div>
            <div className="mt-1 py-2 md:py-0 text-">
                <PaymentInfoCart Icon={BsChevronDoubleDown} bgColor="bg-blue-200" color="text-blue-600" title="Wallet" subTitle="Starbucks" textColor="text-red-400" amount='-$77' />
                <PaymentInfoCart Icon={BsCheckLg} bgColor="bg-slate-300" color="text-slate-600" title="Bank Transfer" subTitle="Add Money" textColor="text-green-400" amount='+$337' />
                <PaymentInfoCart Icon={FaHandHoldingUsd} bgColor="bg-orange-200" color="text-orange-700" title="Paypal" subTitle="Add Money" textColor="text-green-400" amount='+$678' />
                <PaymentInfoCart Icon={MdOutlinePayment} bgColor="bg-sky-200" color="text-sky-700" title="Mastercard" subTitle="Ordered Product" textColor="text-red-400" amount='-$92' />
                <PaymentInfoCart Icon={AiOutlineRise} bgColor="bg-blue-200" color="text-green-500" title="Transfer" subTitle="Refund" textColor="text-green-400" amount='+$99' />
            </div>
        </>
    );
};

export default Transactions;