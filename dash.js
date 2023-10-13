window.addEventListener("load", () => {
  const vendorButton = document.getElementById("toggle-button");
  const vendorDetails = document.getElementById( "vendor-details" );
  const reportButton = document.getElementById( 'report' );
  const reportDetails = document.getElementById( 'report-details' );

  vendorButton.addEventListener("click", () => {
    if (vendorDetails.style.display === "none") {
      vendorDetails.style.display = "block";
      reportDetails.style.display = "none";
    } 
  } );
  
  reportButton.addEventListener("click", () => {
    if (reportDetails.style.display === "none") {
      reportDetails.style.display = "block";
      vendorDetails.style.display = "none";
    } 
  });
});
