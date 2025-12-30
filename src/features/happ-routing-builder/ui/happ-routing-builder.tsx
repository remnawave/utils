import { Grid, Paper, SimpleGrid, Stack } from '@mantine/core'
import { IconPalette } from '@tabler/icons-react'

import { BaseOverlayHeader } from '@shared/ui/base-overlay-header'

import styles from './happ-routing-builder.module.css'
import { CodeEditorPanel } from './code-editor-panel'
import { VisualEditor } from './visual-editor'
import { useRoutingBuilder } from '../model'
import { ExportPanel } from './export-panel'
import { ImportPanel } from './import-panel'

export function HappRoutingBuilder() {
    const {
        formData,
        updateField,
        happLink,
        jsonEditorValue,
        handleJsonChange,
        importInput,
        setImportInput,
        importError,
        handleImport
    } = useRoutingBuilder()

    return (
        <Stack gap="md">
            {/* Import / Export Row */}
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
                <ImportPanel
                    error={importError}
                    onImport={handleImport}
                    onInputChange={setImportInput}
                    value={importInput}
                />
                <ExportPanel happLink={happLink} />
            </SimpleGrid>

            {/* Visual Editor / Code Editor Row */}
            <Grid gutter="md">
                <Grid.Col span={{ base: 12, lg: 7 }}>
                    <Paper className={styles.paper} p="md">
                        <Stack gap="md">
                            <BaseOverlayHeader
                                IconComponent={IconPalette}
                                iconSize={24}
                                iconVariant="gradient-violet"
                                subtitle="Configure your routing rules visually"
                                title="Visual Editor"
                            />
                            <VisualEditor formData={formData} updateField={updateField} />
                        </Stack>
                    </Paper>
                </Grid.Col>

                <Grid.Col span={{ base: 12, lg: 5 }}>
                    <CodeEditorPanel onChange={handleJsonChange} value={jsonEditorValue} />
                </Grid.Col>
            </Grid>
        </Stack>
    )
}
