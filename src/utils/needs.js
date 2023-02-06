// List of Organizational Needs

export const needs = [
    { id: 0, need: "Unspecified" },
    { id: 1, need: "Volunteers" },
    { id: 2, need: "Interns" },
    { id: 3, need: "Monetary Resources" },
 ];
 
 export function getNeed(need_id) {
    return needs.find(x => x.id === need_id)
 }

 