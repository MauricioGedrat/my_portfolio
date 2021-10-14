import React from 'react'

type SvgProps = {
    widthInPixels?: number
    heightInPixels?: number
    fillColor1?: string
    fillColor2?: string
    fillColor3?: string
    fillColor4?: string
    fillColor5?: string
    fillColor6?: string
}

const ScalarLogo = ({
    widthInPixels = 200,
    heightInPixels = 35,
    fillColor1,
    fillColor2,
    fillColor3,
    fillColor4,
    fillColor5,
    fillColor6,
}: SvgProps) => {
    return (
        <>
            <svg
                fill="none"
                width={widthInPixels + 'px' || '50'}
                height={heightInPixels + 'px' || '50'}
                viewBox="0 0 790 154"
                xmlns="http://www.w3.org/2000/svg"
                // {...props}
            >
                {/* S */}
                <path
                    fill={fillColor1 || 'currentColor'}
                    fillOpacity={!fillColor1 ? '90%' : '100%'}
                    d="m 48.15657,48.209116 q 0,10.729484 8.721352,10.729484 h 62.456128 q 22.22538,0 37.69875,13.061982 15.7547,13.061982 15.7547,31.488708 v 3.26549 q 0,18.42673 -15.7547,31.48871 -15.47337,13.06198 -37.69875,13.06198 H 16.928505 v -37.0867 H 119.33405 q 3.65734,0 6.18935,-2.09924 2.81334,-2.3325 2.81334,-5.36475 0,-10.729482 -9.00269,-10.729482 H 56.877922 q -21.944046,0 -37.698746,-13.061981 Q 3.4244769,69.901335 3.4244769,51.474611 v -3.265495 q 0,-18.426725 15.7546991,-31.488706 Q 34.933876,3.6584282 56.877922,3.6584282 H 159.5648 V 40.745126 H 56.877922 q -3.376007,0 -6.189347,2.332497 -2.532005,2.099247 -2.532005,5.131493 z"
                />
            </svg>
        </>
    )
}
export default ScalarLogo
