function renderDescription(itemData: any) {
  return (
    <p>
      {itemData &&
      typeof itemData.description === "object" &&
      itemData.description
        ? itemData.description.value
        : itemData && typeof itemData.description === "string"
        ? itemData.description
        : "No description available"}
    </p>
  );
}

export default renderDescription;
