// List of Organizational Needs

export const need = [
    { id: 0, need: "Default" },
    { id: 1, need: "Volunteers" },
    { id: 2, need: "Interns" },
    { id: 3, need: "Monetary Resources" },
    { id: 4, need: "Unspecified" },
 ];
 
 export function getNeed(need_id) {
    return need.find(x => x.id === need_id)
 }

 