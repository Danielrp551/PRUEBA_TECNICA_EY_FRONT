import { React, useState } from "react";
import { Box } from "@mui/material";
import ProvidersTable from "../../components/ProvidersTable";
import useProveedores from "../../hooks/useProveedores";
import Header from "../../components/HeaderProveedores";
import Filters from "../../components/FiltersProveedores";
import SelectedFilters from "../../components/SelectedFilters";
import ProviderModal from "../../components/ProviderModal/ProviderModal";
import useCreateProveedor from "../../hooks/useCreateProveedor";
import useUpdateProveedor from "../../hooks/useUpdateProveedor";
import DeleteConfirmationModal from "../../components/DeleteConfirmationModal";
import useDeleteProveedor from "../../hooks/useDeleteProveedor";
import useScreeningProveedor from "../../hooks/useScreeningProveedor";
import ScreeningModal from "../../components/ScreeningModal";
import ProveedoresGuiaSeccion from "../../components/ProveedoresGuiaSeccion";

const screeningSources = [
  { id: "icij", name: "ICIJ Offshore Leaks" },
  { id: "ofac", name: "OFAC Sanctions List" },
  { id: "worldbank", name: "World Bank Sanctioned Firms" },
];

export default function ProveedoresPage() {
  const [searchValue, setSearchValue] = useState("");
  const [NombreEmpresa, setNombreEmpresa] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [PageNumber, setPageNumber] = useState(1);
  const [PageSize, setPageSize] = useState(10);
  const [sortBySelect, setSortBySelect] = useState("");
  const [SortBy, setSortBy] = useState("");
  const [IsDescending, setIsDescending] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [providerToDelete, setProviderToDelete] = useState(null);
  const [screeningModalOpen, setScreeningModalOpen] = useState(false);

  const { mutate: createProveedor, isLoading: isCreating } =
    useCreateProveedor();
  const { mutate: updateProveedor, isLoading: isUpdating } =
    useUpdateProveedor();
  const { mutate: deleteProveedor, isLoading: isDeleting } =
    useDeleteProveedor();

  const { mutateAsync: screeningProveedor, isLoading: isScreening } =
    useScreeningProveedor();

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      setNombreEmpresa(searchValue);
    }
  };

  const handleCountryChange = (event) => {
    const value = event.target.value;
    if (!selectedCountries.includes(value) && value !== "") {
      setSelectedCountries([...selectedCountries, value]);
    }
  };

  const handleDeleteCountry = (countryToDelete) => {
    setSelectedCountries(
      selectedCountries.filter((code) => code !== countryToDelete)
    );
  };

  const handleClearFilters = () => {
    setSelectedCountries([]);
  };

  const handleOpenModal = (mode, provider = null) => {
    setModalMode(mode);
    setSelectedProvider(provider);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProvider(null);
  };

  const handleSubmitModal = async (data) => {
    try {
      if (modalMode === "add") {
        await createProveedor(data);
      } else if (modalMode === "edit" && selectedProvider) {
        await updateProveedor({
          id: selectedProvider.id,
          updatedProveedor: data,
        });
      }
      handleCloseModal();
    } catch (error) {
      console.error("Error al guardar el proveedor", error);
    }
  };

  const onDelete = async (id) => {
    try {
      await deleteProveedor(id);
    } catch (error) {
      console.error("Error al eliminar el proveedor", error);
    }
  };

  const handleDeleteProveedor = (provider) => {
    setSelectedProvider(provider);
    setDeleteModalOpen(true);
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortBySelect(value);
    if (value === "") {
      setSortBy("");
      setIsDescending(false);
    } else {
      const [sortField, direction] = value.split("_");
      setSortBy(sortField);
      setIsDescending(direction === "desc");
    }
  }

  console.log("selectedCountries", selectedCountries);
  // Utilizar el hook personalizado para obtener proveedores
  const { data, isLoading, isError, error, isFetching } = useProveedores({
    SearchValue: NombreEmpresa,
    PageNumber,
    PageSize,
    Paises: selectedCountries.length > 0 ? selectedCountries : null,
    SortBy,
    IsDescending,
  });

  const handleScreening = (provider) => {
    setSelectedProvider(provider);
    setScreeningModalOpen(true);
    console.log("Screening", provider);
  };

  const onScreening = async (sources) => {
    console.log("Screening", sources, selectedProvider.nombreComercial);
    try {
      const result = await screeningProveedor(
        selectedProvider?.nombreComercial
      );

      const selectedSourceNames = sources
        .map((id) => {
          const mapping = screeningSources.find((s) => s.id === id);
          return mapping ? mapping.name : null;
        })
        .filter((name) => name !== null);

      const filteredData = result.filter((item) =>
        selectedSourceNames.includes(item.sourceName)
      );
      console.log("Data screening", filteredData);
      return filteredData;
    } catch (error) {
      console.error("Error al obtener el screening", error);
    }
    //return [];
  };

  const totalCount = data ? data.length : 0;

  return (
    <Box className="bg-white rounded-lg shadow-lg p-6">
      <Header onOpenModal={handleOpenModal} />

      <ProveedoresGuiaSeccion />

      <Filters
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearchKeyDown={handleSearchKeyDown}
        handleCountryChange={handleCountryChange}
        selectedCountries={selectedCountries}
        sortBy={sortBySelect}
        handleSortChange={handleSortChange}
      />

      <SelectedFilters
        selectedCountries={selectedCountries}
        handleDeleteCountry={handleDeleteCountry}
        handleClearFilters={handleClearFilters}
      />

      {/* Table */}
      <ProvidersTable
        providers={data ? data : []}
        isLoading={isLoading}
        isFetching={isFetching}
        page={PageNumber}
        setPage={setPageNumber}
        pageSize={PageSize}
        setPageSize={setPageSize}
        totalCount={totalCount}
        onView={(provider) => handleOpenModal("view", provider)}
        onEdit={(provider) => handleOpenModal("edit", provider)}
        onDelete={(provider) => handleDeleteProveedor(provider)}
        onScreening={(provider) => handleScreening(provider)}
      />
      <ProviderModal
        open={modalOpen}
        onClose={handleCloseModal}
        mode={modalMode}
        initialData={selectedProvider}
        onSubmit={handleSubmitModal}
        isSubmitting={isCreating || isUpdating}
      />

      <DeleteConfirmationModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={() => {
          onDelete(selectedProvider.id);
          setDeleteModalOpen(false);
        }}
        providerName={selectedProvider?.nombreComercial}
      />

      <ScreeningModal
        open={screeningModalOpen}
        onClose={() => setScreeningModalOpen(false)}
        providerName={selectedProvider?.nombreComercial || ""}
        onScreening={onScreening}
      />
    </Box>
  );
}
