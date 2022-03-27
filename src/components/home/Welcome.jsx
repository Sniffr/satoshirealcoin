import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import logo from "../../images/lg.png";
import real from "../../images/real.jpg";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

const filter = createFilterOptions();

const InputField = () => {
  // Our sample dropdown options
  const options = ["Matic", "Eth", "DAI", "Sol", "USDT", "XRP"];

  return (
    <div style={{ marginLeft: "1%", marginTop: "10px" }}>
      <Autocomplete
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          // Suggest the creation of a new value
          if (params.inputValue !== "") {
            filtered.push(`Add "${params.inputValue}"`);
          }
          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        options={options}
        renderOption={(option) => option}
        style={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Choose Token" variant="outlined" />
        )}
      />
    </div>
  );
};

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-4xl sm:text-6xl  text-gradient py-1">
            Satoshi Real <br /> Coin
          </h1>
          <p className="text-left mt-5 text-[#3a0c0c] font-light md:w-9/12 w-11/12 text-base">
            SATOSHI REAL COIN is the future that we have created for you to own
            real estate wealth through it. Holding SAR coins is unlocking your
            financial capabilities not only to live up to your dreams but also
            to have a sense of belonging regardless of your background. We
            extensively invest in Real-Estate, envisioning Satoshi Mall, Satoshi
            Tower, and Satoshi Apartments.{" "}
          </p>

          <button
            type="button"
            // onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div
              className={`text-[#3a0c0c] rounded-tl-2xl ${companyCommonStyles}`}
            >
              Real Estate
            </div>
            <div className={`text-[#3a0c0c] ${companyCommonStyles}`}>
              Security
            </div>
            <div
              className={`text-[#3a0c0c] sm:rounded-tr-2xl ${companyCommonStyles}`}
            >
              Build on Binance Chain
            </div>
            <div
              className={`text-[#3a0c0c] sm:rounded-bl-2xl ${companyCommonStyles}`}
            >
              Web 3.0
            </div>
            <div className={`text-[#3a0c0c] ${companyCommonStyles}`}>
              Blockchain
            </div>
            <div
              className={`text-[#3a0c0c] rounded-br-2xl ${companyCommonStyles}`}
            >
              Low property commission
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div
            style={{
              backgroundImage: `url(${real})`,
              fontSize: "50px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card  "
          >
            <div className="flex justify-between flex-col w-full h-full">
              <div>
                <p className="text-[#0e049c] font-bold text-xl mt-1">
                  Satoshi Real
                </p>
                <p className="text-[#3a0c0c] font-bold text-xl">
                  Real estate royalty virtual card
                </p>
              </div>
              <div className="flex justify-between items-start">
                <div className="md:flex-[0.5] flex-initial justify-center items-center">
                  <img src={logo} alt="logo" className="w-16 cursor-pointer" />
                </div>
                <div className="py-5">
                  <BsInfoCircle fontSize={17} color="#00ff00" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <h1 className="text-3xl sm:text-4xl text-white text-gradient py-1">
              Satoshi Swap
            </h1>
            <ul>
              <li>
                Connect your wallet to the Satoshi Swap by clicking Authenticate
                button at{" "}
                <span className="text-[#562ABF]">Top Right Corner</span>.
              </li>
              <br />
              <li>
                Select the token you wish to trade and SAR as token you wish to
                receive. Click on{" "}
                <span className="text-[#562ABF]">Select a token </span>and
                browse the list to find your token. You can also search by token
                name, symbol, or token address.
              </li>
              <br />
              <li>
                Next, enter the amount that you wish to trade. You can enter
                either your desired input amount or output amount.
              </li>
              <br />
              <li>
                Press the 'Swap' button to view a preview of your swap. This
                screen will show all the details of your trade
              </li>
            </ul>

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            <button
              type="button"
              className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
            >
              Swap Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
