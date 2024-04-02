type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  nlwUnite: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <rect width="32" height="32" fill="#F48F56" rx="7.111" />
      <path
        fill="#00292E"
        fillRule="evenodd"
        d="M12.068 15.058v-2.3L5.711 15.12h-.014v2.362h.014l6.357 2.364v-2.305l-3.26-1.244 3.26-1.239zM19.633 18.062l3.257-1.237-3.257-1.237v-2.3l6.35 2.364H26v2.364h-.017l-6.35 2.353v-2.307zm-2.727-8.031L13.17 22.017h2.216l3.735-11.986h-2.216z"
        clipRule="evenodd"
      />
    </svg>
  )
}
