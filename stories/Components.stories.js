import classNames from "classnames";
import Link from "next/link";
import { string, bool } from "prop-types";
import { withDesign } from "storybook-addon-designs";

export const LinkComponent = ({ label, disabled, noHover, bold }) => {
	return (
		<Link href={"/home"}>
			<a className={classNames({ disabled, "no-hover": noHover, bold })}>{label}</a>
		</Link>
	);
};
LinkComponent.storyName = "Link";
LinkComponent.propTypes = {
	label: string,
	disabled: bool,
	noHover: bool,
	bold: bool,
};

LinkComponent.args = {
	label: "Home",
	disabled: false,
	noHover: false,
	bold: false,
};

export const Button = ({ animate, disabled }) => {
	return (
		<button disabled={disabled} className={classNames({ animate })}>
			Click
		</button>
	);
};
Button.propTypes = {
	disabled: bool,
	animate: bool,
};
Button.args = {
	disabled: false,
	animate: false,
};

export default {
	title: "Components",
	decorators: [withDesign],
	parameters: {
		design: {
			type: "figma",
			url: "404",
		},
	},
};
