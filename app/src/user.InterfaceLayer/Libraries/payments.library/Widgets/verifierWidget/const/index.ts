
export const IVerifierWidgetPropsDefault = {
    codeIsWaiting: false,
    isLockedSubmitBtn: false
};
export const TypingPhoneText = () => "We will send you a one-time password on this mobile number";
export const WaitingCodeText = (phone = "s") =>
    `Enter the OTP sent to
    ${phone}`;
