from good_ass_pydantic_integrator import GAPI

gapi = GAPI(class_name="User")
gapi.add_object_from_dict(
    {
        "id": "3e4666bf-d5e5-4aa7-b8ce-cefe41c7568a",
        "name": "Ada",
        "created_at": "2025-01-01T12:00:00Z",
        "tags": ["admin", "early-access"],
    }
)
print(gapi.get_pydantic_model_content())

# ───────────────────────── Printed output ─────────────────────────
from typing import TYPE_CHECKING

from pydantic import AwareDatetime, BaseModel, ConfigDict

if TYPE_CHECKING:
    from uuid import UUID


class User(BaseModel):
    model_config = ConfigDict(extra="forbid")
    id: UUID
    name: str
    created_at: AwareDatetime
    tags: list[str]
