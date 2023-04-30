import { useState } from "react";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (_e) => {
    setShowModal(true);
  };

  const handleClose = (_e) => setShowModal(false);

  return (
    <div>
      <h1 className="ui header">Modal</h1>
      <button className="ui primary button" onClick={handleShowModal}>
        Show Modal
      </button>
      {showModal && (
        <Modal
          onClose={handleClose}
          header={"Modal Component"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas pharetra convallis posuere morbi leo urna. Vitae nunc sed velit dignissim. Ut consequat semper viverra nam libero. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ac tortor dignissim convallis aenean et. Nec sagittis aliquam malesuada bibendum arcu vitae. Nibh praesent tristique magna sit. Sit amet luctus venenatis lectus magna fringilla urna. Massa id neque aliquam vestibulum morbi blandit. Semper quis lectus nulla at volutpat. Ultricies tristique nulla aliquet enim tortor at. Id eu nisl nunc mi ipsum faucibus. Molestie at elementum eu facilisis sed odio morbi quis. Faucibus interdum posuere lorem ipsum. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Risus pretium quam vulputate dignissim. Arcu bibendum at varius vel pharetra vel turpis. Arcu odio ut sem nulla pharetra. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Sed viverra ipsum nunc aliquet bibendum. Potenti nullam ac tortor vitae purus faucibus. Nisi est sit amet facilisis. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Sed id semper risus in hendrerit gravida rutrum quisque non. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Non pulvinar neque laoreet suspendisse interdum. Quis viverra nibh cras pulvinar mattis nunc. Metus aliquam eleifend mi in nulla posuere. Amet cursus sit amet dictum sit amet justo donec enim. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat."
          }
          onDiscard={() => console.log("Discard clicked.")}
          onAccept={() => console.log("Accept clicked.")}
        />
      )}
    </div>
  );
};

export default ModalPage;
