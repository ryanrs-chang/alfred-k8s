import alfy from "alfy";
import { homedir } from "os";
import path from "path";
import fs from "fs";

export const updateWeight = (key) => {



};

export const getKubeconfigs = () => {
	let kubeconfigs = alfy.cache.get("kubeconfig");

	if (kubeconfigs && kubeconfigs.length > 0) {
		return kubeconfigs;
	}

	kubeconfigs = fs
		.readdirSync(path.resolve(homedir(), ".kube"), {
			withFileTypes: true,
		})
		.filter((dirent) => dirent.isFile() && !dirent.name.startsWith("."))
		.map((dirent) => dirent.name);
	alfy.cache.set("kubeconfig", kubeconfigs, { maxAge: 10000 });
	return kubeconfigs;
};
