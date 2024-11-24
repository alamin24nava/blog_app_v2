import { useState, useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
const DropDownOption = ({
    _dropDownOptions,
    _selectedOption,
    _onChange,
    _placeholder = "Select an option",
    _label,
    _multiSelectDropdown,
}) => {
    const ref = useRef();
    useOutsideClick(ref, () => {
        setIsOpen(false);
    });
    const [isOpen, setIsOpen] = useState(false);
    const [searchItem, setSearchItem] = useState("");
    const filteredOptions = _dropDownOptions?.filter((option) =>
        option?.toLowerCase().includes(searchItem?.toLowerCase())
    );
    const handleOptionClick = (option) => {
        _onChange(option);
        setIsOpen(false);
    };
    return (
        <div ref={ref} className="dropdown w-full flex flex-col	gap-4">
            <label htmlFor="">{_label}</label>
            <div>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={`${
                        isOpen ? "rounded-b-none" : ""
                    } border border-current py-3 px-4 w-full rounded-md cursor-pointer flex items-center justify-between gap-4`}
                >
                    {_selectedOption || _placeholder}
                    <span
                        className={`${
                            isOpen ? "rotate-180" : ""
                        } transition-all ease-in-out`}
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            fontSize="14"
                            className="flex-none text-skyblue-700 hover:text-skyblue-550 dark:text-skyblue dark:hover:text-white"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                    </span>
                </div>
                {isOpen && (
                    <div className="dropdown-body border border-current w-full rounded-md absolute z-50 border-t-0 rounded-t-none">
                        <label className="input input-bordered flex items-center gap-2 rounded-none">
                            <input
                                onChange={(e) => setSearchItem(e.target.value)}
                                value={searchItem}
                                type="text"
                                className="grow"
                                placeholder="Search"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70"
                            >
                                {" "}
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </label>
                        <div className="dropdown-options">
                            {filteredOptions?.length > 0 ? (
                                filteredOptions.map((option, index) => (
                                    <div
                                        onClick={() =>
                                            handleOptionClick(option)
                                        }
                                        key={index}
                                        className={`px-3 py-2 hover:bg-slate-100 flex items-center justify-between cursor-pointer`}
                                    >
                                        <div className="flex gap-2 items-center">
                                            {_multiSelectDropdown && (
                                                <input type="checkbox" />
                                            )}
                                            {option}
                                        </div>
                                        {!_multiSelectDropdown && (
                                            <span
                                                className={`${
                                                    option === _selectedOption
                                                        ? "block"
                                                        : "hidden"
                                                }`}
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 448 512"
                                                    fontSize="12"
                                                    className="text-skyblue-700 group-hover:text-skyblue-550 dark:text-skyblue dark:group-hover:text-black"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                                                </svg>
                                            </span>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div className="py-3 px-4">
                                    No Option Available !
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default DropDownOption;
