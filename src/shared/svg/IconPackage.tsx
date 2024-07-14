import { SvgProps } from "../interfaces/Svg.interfaces";

export const IconPackage = ({fill, width, height}: SvgProps) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.89 1.45003L20.89 5.45003C21.2232 5.6156 21.5036 5.87085 21.6997 6.18707C21.8958 6.50329 21.9998 6.86794 22 7.24003V16.77C21.9998 17.1421 21.8958 17.5068 21.6997 17.823C21.5036 18.1392 21.2232 18.3945 20.89 18.56L12.89 22.56C12.6121 22.6991 12.3057 22.7715 11.995 22.7715C11.6843 22.7715 11.3778 22.6991 11.1 22.56L3.09999 18.56C2.76712 18.3923 2.48774 18.1349 2.29338 17.8168C2.09901 17.4988 1.99739 17.1328 1.99999 16.76V7.24003C2.00018 6.86794 2.10418 6.50329 2.30027 6.18707C2.49636 5.87085 2.77677 5.6156 3.10999 5.45003L11.11 1.45003C11.3865 1.3126 11.6912 1.24109 12 1.24109C12.3088 1.24109 12.6134 1.3126 12.89 1.45003V1.45003Z"
        stroke="#ffffff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.32001 6.16003L12 11L21.68 6.16003"
        stroke="#ffffff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 22.76V11"
        stroke="#ffffff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7 3.5L17 8.5"
        stroke="#ffffff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
