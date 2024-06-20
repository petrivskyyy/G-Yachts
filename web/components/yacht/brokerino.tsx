import IBroker from "@/types/broker";
import Image from "next/image";
import codes from "@/data/CountryCodes.json";
import { clsx } from "clsx";

const Brokerino = ({ brokerino }: { brokerino: IBroker }) => (
    <div className={"w-full flex justify-between items-start h-[16vh]"}>
        <div className={"flex justify-start items-start h-full gap-[2vh] w-full"}>
            <Image
                src={brokerino.picture || "/icons/user.svg"}
                width={128}
                height={128}
                alt={`${brokerino.name} photo`}
                className={clsx("bg-center bg-cover", {
                    "size-[16vh]": brokerino.picture,
                    "size-[6vh]": !brokerino.picture,
                })}
            />
            <div className={"flex flex-col justify-between items-start h-full w-full"}>
                <div className={"w-full flex justify-between items-start"}>
                    <div className={"flex flex-col justify-start items-start h-max w-max"}>
                        <h3 className={"font-medium"}>{brokerino.name}</h3>
                        <p className={"uppercase"}>{brokerino.position}</p>
                    </div>
                    <a className={"h-max w-max"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 64 64"
                            className={"size-[4vh]"}>
                            <path d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 36.065 11.10725 39.869719 13.03125 43.136719 L 10.214844 53.683594 L 21.277344 51.208984 C 24.450344 52.983984 28.106 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 41.941 41.941 50 32 50 C 28.269 50 24.803687 48.864875 21.929688 46.921875 L 15.791016 48.294922 L 17.353516 42.439453 C 15.250516 39.493453 14 35.896 14 32 C 14 22.059 22.059 14 32 14 z M 24.472656 21.736328 C 24.105656 21.736328 23.515672 21.871969 23.013672 22.417969 C 22.520672 22.964969 21.113281 24.278844 21.113281 26.964844 C 21.113281 29.640844 23.057078 32.23675 23.330078 32.59375 C 23.603078 32.96075 27.100531 38.639266 32.644531 40.822266 C 37.240531 42.632266 38.179547 42.273688 39.185547 42.179688 C 40.183547 42.093688 42.408328 40.866703 42.861328 39.595703 C 43.313328 38.323703 43.312875 37.232906 43.171875 37.003906 C 43.034875 36.781906 42.676859 36.644094 42.130859 36.371094 C 41.584859 36.097094 38.906297 34.777656 38.404297 34.597656 C 37.909297 34.417656 37.542547 34.323141 37.185547 34.869141 C 36.818547 35.415141 35.778125 36.643953 35.453125 37.001953 C 35.138125 37.368953 34.823344 37.411672 34.277344 37.138672 C 33.731344 36.865672 31.975531 36.292594 29.894531 34.433594 C 28.275531 32.992594 27.182188 31.208063 26.867188 30.664062 C 26.551188 30.119062 26.832469 29.821828 27.105469 29.548828 C 27.353469 29.310828 27.652781 28.916563 27.925781 28.601562 C 28.189781 28.277563 28.282891 28.056453 28.462891 27.689453 C 28.651891 27.332453 28.555922 27.007375 28.419922 26.734375 C 28.284922 26.460375 27.226234 23.765406 26.740234 22.691406 C 26.332234 21.787406 25.905672 21.760953 25.513672 21.751953 C 25.196672 21.735953 24.829656 21.736328 24.472656 21.736328 z"></path>
                        </svg>
                    </a>
                </div>
                <div className={"flex flex-col justify-end items-start h-max text-rock-500"}>
                    {brokerino.phones.map((phone) => {
                        const code = codes.find((code) => code.dial_code === phone.prefix);
                        const countryCode = code ? code.code : "";
                        return (
                            <p key={phone.number}>
                                {countryCode + ": " + phone.prefix + " " + phone.number}
                            </p>
                        );
                    })}
                    <p>{brokerino.email}</p>
                </div>
            </div>
        </div>
        <a></a>
    </div>
);

export default Brokerino;