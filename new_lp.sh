#!/bin/bash

# Cores para o terminal
ORANGE='\033[0;33m'
NC='\033[0m'

echo -e "${ORANGE}🚀 Gerador de LP | Julio_Studio v2${NC}"

read -p "Nome Fantasia do Cliente: " client_name
read -p "Slug da URL (ex: cafe-do-povo): " project_slug

# Cria o arquivo via Hugo Archetype
hugo new "lp/${project_slug}.md"

# Substitui o placeholder pelo nome do cliente
filepath="content/lp/${project_slug}.md"
sed -i "s/CLIENT_NAME/${client_name}/g" "$filepath"

echo -e "\n${ORANGE}[CONCLUÍDO]${NC}"
echo -e "Arquivo: $filepath"
echo -e "Preview: http://localhost:1313/lp/${project_slug}/"