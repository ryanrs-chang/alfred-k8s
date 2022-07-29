import alfy from "alfy";
import { getKubeconfigs } from "./lib";

const filesNames = getKubeconfigs()
	.filter((name) => name.includes(alfy.input))
	.map((name) => ({ title: name, arg: name }));

alfy.output(filesNames);
