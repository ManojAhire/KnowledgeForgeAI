import json

from app.services.gemini_service import model


def analyze_document(document):

    prompt = f"""
You are an Industrial Documentation Expert.

Analyze this document and extract important information.

Return ONLY valid JSON.
Do not explain anything.
Do not use markdown.
Do not use ```json.

Return exactly this structure:

{{
    "summary": "",
    "safety": [],
    "maintenance": [],
    "risks": [],
    "keywords": [],
    "machines": [],

    "graph": {{
        "nodes": [
            {{
                "id": "unique_id",
                "label": "Human Readable Name",
                "type": "machine | component | energy_source | safety_procedure | maintenance_task | hazard"
            }}
        ],
        "edges": [
            {{
                "source": "existing_node_id",
                "target": "existing_node_id",
                "label": "relationship"
            }}
        ]
    }}
}}

GRAPH RULES:

1. Create a maximum of 10 nodes.

2. Only create nodes for concrete entities explicitly mentioned in the document.

3. Valid node types are ONLY:
   - machine
   - component
   - energy_source
   - safety_procedure
   - maintenance_task
   - hazard

4. NEVER create generic nodes such as:
   - entity
   - process
   - activity
   - personnel
   - information
   - document
   - procedure

5. A node label must be a specific real-world concept.
   Good:
   - Electrical Energy
   - Lockout Device
   - Machine
   - Authorized Employee
   - Unexpected Startup

   Bad:
   - Entity
   - Process
   - Activity
   - Component

6. Create only relationships that are directly meaningful.

7. Prefer a connected graph centered around the main machine or main safety concept.

8. Create a maximum of 12 relationships.

9. Every edge source and target must exactly match an existing node id.

10. If there are no concrete entities, return empty arrays.

11. Do not create a node merely because a word appears frequently.

12. Prioritize:
   - the main machine or equipment
   - energy sources
   - lockout/tagout devices
   - safety procedures
   - hazards
   - maintenance actions


Document:

{document}
"""

    response = model.generate_content(prompt)

    text = response.text.strip()

    text = text.replace("```json", "")
    text = text.replace("```", "")
    text = text.strip()

    return json.loads(text)