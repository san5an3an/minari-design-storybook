 const SAFE_SLUGS = new Set<string>([
  "delete-one-click", "delete-with-simple-confirmation", "delete-with-additional-confirmation",
  "details-hub", "details-tabs", "edit", "table", "table-editable", "table-expandable",
  "table-property-filter", "table-saved-filters", "table-select-filter", "wizard", "write-to-s3",
  "table-date-filter", "form", "form-unsaved-changes", "form-validation", "chat", "dashboard",
  "configurable-dashboard", "details", "manage-tags", "non-console", "product-detail-page",
  "read-from-s3", "server-side-table", "server-side-table-property-filter",
  "split-panel-comparison", "split-panel-multiple", "cards",
]);

export function loadPage(slug: string): Promise<{ default: React.ComponentType<Record<string, never>> }> | null {
  if (!SAFE_SLUGS.has(slug)) return null;
  return import(`./_embed/${slug}`);
}
