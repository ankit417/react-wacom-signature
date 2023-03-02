import { SignatureStu } from "./signatureStu/signatureStu.common";

export const App = () => {
  /**
   * @function postSignature , to post STU signature
   * @param {file} e
   */
  const postSignature = async (e) => {
    //SAVE SIGNATURE
  };

  return (
    <div>
      <SignatureStu
        stuImage={(e) => {
          postSignature(e);
        }}
        signature={"Default Signature Image"}
        disable={false}
      />
    </div>
  );
};
