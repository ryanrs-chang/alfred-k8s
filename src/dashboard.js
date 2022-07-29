import alfy from "alfy";
import { getKubeconfigs } from "./lib";

const extractIP = (name) => {
	const arr = name.split(".");
	arr.splice(4, arr.length - 4);
	return arr.join(".");
};

const filesNames = getKubeconfigs()
	.filter((name) => name.includes(alfy.input))
	.map((name) => ({ title: name, arg: extractIP(name) }));

alfy.output(filesNames);
