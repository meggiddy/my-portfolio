
function Footer() {
  return (
    <>
      <hr className="my-2 border-white" />
      {" "}
      <div className="flex items-center m-8 justify-center" >
      <p className="text-black font-semibold text-sm">
        © {new Date().getFullYear()} Maggie Muriithi | All Rights Reserved.
      </p>
    </div>
    </>
  );
}

export default Footer;
