import {
    Box,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Slider,
    Typography,
} from "@mui/material";
import type { FiltroProps } from "../../types";

export function Filtros({
    busca,
    setBusca,
    categoriaSelecionada,
    setCategoriaSelecionada,
    valorMin,
    valorMax,
    handleRangeChange,
    categorias,
    resetarPagina,
}: FiltroProps) {

    return (
        <Box sx={{ display: "flex", gap: 4, p: 4 }}>
            <TextField
                label="Buscar por nome"
                variant="outlined"
                value={busca}
                onChange={(e) => {
                    setBusca(e.target.value);
                    resetarPagina();
                }}
                sx={{ flex: 1 }}
            />

            <FormControl sx={{ flex: 1 }}>
                <InputLabel id="categoria-label">Categoria</InputLabel>
                <Select
                    labelId="categoria-label"
                    value={categoriaSelecionada}
                    label="Categoria"
                    onChange={(e) => {
                        setCategoriaSelecionada(e.target.value);
                        resetarPagina();
                    }}
                >
                    <MenuItem value="">Todas</MenuItem>
                    {categorias.map((categoria) => (
                        <MenuItem key={categoria.id} value={categoria.id}>
                            {categoria.nome}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Box sx={{ flex: 1 }}>
                <Typography gutterBottom>Faixa de preço (R$)</Typography>
                <Slider
                    value={[valorMin, valorMax]}
                    onChange={handleRangeChange}
                    min={0}
                    max={10000}
                    step={10}
                    valueLabelDisplay="auto"
                />
            </Box>
        </Box>
    );
};
