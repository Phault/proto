// Automatically generated by schematic. DO NOT MODIFY!

/* eslint-disable */

/** Information about the current state of the tool. */
export interface ToolContext {
	/** The version of proto (the core crate) calling plugin functions. */
	proto_version: string | null;
	/** Virtual path to the tool's installation directory. */
	tool_dir: string;
	/** Current version. Will be a "latest" alias if not resolved. */
	version: string;
}

/** Supported types of plugins. */
export type PluginType = 'Language' | 'DependencyManager' | 'CLI';

/** Input passed to the `register_tool` function. */
export interface ToolMetadataInput {
	/** ID of the tool, as it was configured. */
	id: string;
}

/** Controls aspects of the tool inventory. */
export interface ToolInventoryMetadata {
	/** Disable progress bars when installing or uninstalling tools. */
	disable_progress_bars: boolean;
	/**
	 * Override the tool inventory directory (where all versions are installed).
	 * This is an advanced feature and should only be used when absolutely necessary.
	 */
	override_dir: string | null;
	/** Suffix to append to all versions when labeling directories. */
	version_suffix: string | null;
}

/** Output returned by the `register_tool` function. */
export interface ToolMetadataOutput {
	/** Default alias or version to use as a fallback. */
	default_version: string | null;
	/** Controls aspects of the tool inventory. */
	inventory: ToolInventoryMetadata;
	/** Human readable name of the tool. */
	name: string;
	/** Version of the plugin. */
	plugin_version: string | null;
	/**
	 * Names of commands that will self-upgrade the tool,
	 * and should be blocked from happening.
	 */
	self_upgrade_commands: string[];
	/** Type of the tool. */
	type: PluginType;
}

/** Output returned by the `detect_version_files` function. */
export interface DetectVersionOutput {
	/** List of files that should be checked for version information. */
	files: string[];
	/** List of path patterns to ignore when traversing directories. */
	ignore: string[];
}

/** Input passed to the `parse_version_file` function. */
export interface ParseVersionFileInput {
	/** File contents to parse/extract a version from. */
	content: string;
	/** Name of file that's being parsed. */
	file: string;
}

/** Output returned by the `parse_version_file` function. */
export interface ParseVersionFileOutput {
	/**
	 * The version that was extracted from the file.
	 * Can be a semantic version or a version requirement/range.
	 */
	version: string | null;
}

/** Input passed to the `native_install` function. */
export interface NativeInstallInput {
	/** Current tool context. */
	context: ToolContext;
	/** Virtual directory to install to. */
	install_dir: string;
}

/** Output returned by the `native_install` function. */
export interface NativeInstallOutput {
	/** Error message if the install failed. */
	error: string | null;
	/** Whether the install was successful. */
	installed: boolean;
	/** Whether to skip the install process or not. */
	skip_install: boolean;
}

/** Input passed to the `native_uninstall` function. */
export interface NativeUninstallInput {
	/** Current tool context. */
	context: ToolContext;
}

/** Output returned by the `native_uninstall` function. */
export interface NativeUninstallOutput {
	/** Error message if the uninstall failed. */
	error: string | null;
	/** Whether to skip the uninstall process or not. */
	skip_uninstall: boolean;
	/** Whether the install was successful. */
	uninstalled: boolean;
}

/** Input passed to the `download_prebuilt` function. */
export interface DownloadPrebuiltInput {
	/** Current tool context. */
	context: ToolContext;
	/** Virtual directory to install to. */
	install_dir: string;
}

/** Output returned by the `download_prebuilt` function. */
export interface DownloadPrebuiltOutput {
	/**
	 * Name of the direct folder within the archive that contains the tool,
	 * and will be removed when unpacking the archive.
	 */
	archive_prefix: string | null;
	/**
	 * File name of the checksum to download. If not provided,
	 * will attempt to extract it from the URL.
	 */
	checksum_name: string | null;
	/** Public key to use for checksum verification. */
	checksum_public_key: string | null;
	/**
	 * A secure URL to download the checksum file for verification.
	 * If the tool does not support checksum verification, this setting can be omitted.
	 */
	checksum_url: string | null;
	/**
	 * File name of the archive to download. If not provided,
	 * will attempt to extract it from the URL.
	 */
	download_name: string | null;
	/** A secure URL to download the tool/archive. */
	download_url: string;
}

/** Input passed to the `unpack_archive` function. */
export interface UnpackArchiveInput {
	/** Current tool context. */
	context: ToolContext;
	/** Virtual path to the downloaded file. */
	input_file: string;
	/** Virtual directory to unpack the archive into, or copy the binary to. */
	output_dir: string;
}

/** Output returned by the `verify_checksum` function. */
export interface VerifyChecksumInput {
	/** Virtual path to the checksum file. */
	checksum_file: string;
	/** Current tool context. */
	context: ToolContext;
	/** Virtual path to the downloaded file. */
	download_file: string;
}

/** Output returned by the `verify_checksum` function. */
export interface VerifyChecksumOutput {
	verified: boolean;
}

/** Input passed to the `locate_executables` function. */
export interface LocateExecutablesInput {
	/** Current tool context. */
	context: ToolContext;
}

export type StringOrVec = string | string[];

/** Configuration for generated shim and symlinked binary files. */
export interface ExecutableConfig {
	/**
	 * The executable path to use for symlinking binaries instead of `exe_path`.
	 * This should only be used when `exe_path` is a non-standard executable.
	 */
	exe_link_path: string | null;
	/**
	 * The file to execute, relative from the tool directory.
	 * Does *not* support virtual paths.
	 *
	 * The following scenarios are powered by this field:
	 * - Is the primary executable.
	 * - For primary and secondary bins, the source file to be symlinked,
	 * and the extension to use for the symlink file itself.
	 * - For primary shim, this field is ignored.
	 * - For secondary shims, the file to execute.
	 */
	exe_path: string | null;
	/** Do not symlink a binary in `~/.proto/bin`. */
	no_bin: boolean;
	/** Do not generate a shim in `~/.proto/shims`. */
	no_shim: boolean;
	/** The parent executable name required to execute the local executable path. */
	parent_exe_name: string | null;
	/** Custom args to append to user-provided args within the generated shim. */
	shim_after_args: StringOrVec | null;
	/** Custom args to prepend to user-provided args within the generated shim. */
	shim_before_args: StringOrVec | null;
	/** Custom environment variables to set when executing the shim. */
	shim_env_vars: Record<string, string> | null;
}

/** Output returned by the `locate_executables` function. */
export interface LocateExecutablesOutput {
	/**
	 * List of directory paths to find the globals installation directory.
	 * Each path supports environment variable expansion.
	 */
	globals_lookup_dirs: string[];
	/**
	 * A string that all global binaries are prefixed with, and will be removed
	 * when listing and filtering available globals.
	 */
	globals_prefix: string | null;
	/**
	 * Configures the primary/default executable to create.
	 * If not provided, a primary shim and binary will *not* be created.
	 */
	primary: ExecutableConfig | null;
	/**
	 * Configures secondary/additional executables to create.
	 * The map key is the name of the shim/binary file.
	 */
	secondary: Record<string, ExecutableConfig>;
}

/** Input passed to the `load_versions` function. */
export interface LoadVersionsInput {
	/** The alias or version currently being resolved. */
	initial: string;
}

/** Output returned by the `load_versions` function. */
export interface LoadVersionsOutput {
	/** Mapping of aliases (channels, etc) to a version. */
	aliases: Record<string, string>;
	/** Latest canary version. */
	canary: string | null;
	/** Latest stable version. */
	latest: string | null;
	/** List of available production versions to install. */
	versions: string[];
}

/** Input passed to the `resolve_version` function. */
export interface ResolveVersionInput {
	/** The alias or version currently being resolved. */
	initial: string;
}

/** Output returned by the `resolve_version` function. */
export interface ResolveVersionOutput {
	/** New alias or version candidate to resolve. */
	candidate: string | null;
	/**
	 * An explicitly resolved version to be used as-is.
	 * Note: Only use this field if you know what you're doing!
	 */
	version: string | null;
}

/** Input passed to the `sync_manifest` function. */
export interface SyncManifestInput {
	/** Current tool context. */
	context: ToolContext;
}

/** Output returned by the `sync_manifest` function. */
export interface SyncManifestOutput {
	/** Whether to skip the syncing process or not. */
	skip_sync: boolean;
	/**
	 * List of versions that are currently installed. Will replace
	 * what is currently in the manifest.
	 */
	versions: string[] | null;
}

/** Input passed to the `sync_shell_profile` function. */
export interface SyncShellProfileInput {
	/** Current tool context. */
	context: ToolContext;
	/** Arguments passed after `--` that was directly passed to the tool's binary. */
	passthrough_args: string[];
}

/** Output returned by the `sync_shell_profile` function. */
export interface SyncShellProfileOutput {
	/**
	 * An environment variable to check for in the shell profile.
	 * If the variable exists, injecting path and exports will be avoided.
	 */
	check_var: string;
	/** A mapping of environment variables that will be injected as exports. */
	export_vars: Record<string, string> | null;
	/** A list of paths to prepend to the `PATH` environment variable. */
	extend_path: string[] | null;
	/** Whether to skip the syncing process or not. */
	skip_sync: boolean;
}

/**
 * Input passed to the `pre_install` and `post_install` hooks,
 * while a `proto install` command is running.
 */
export interface InstallHook {
	/** Current tool context. */
	context: ToolContext;
	/** Arguments passed after `--` that was directly passed to the tool's binary. */
	passthrough_args: string[];
	/** Whether the resolved version was pinned */
	pinned: boolean;
}

/**
 * Input passed to the `pre_run` hook, before a `proto run` command
 * or language binary is ran.
 */
export interface RunHook {
	/** Current tool context. */
	context: ToolContext;
	/** Path to the global packages directory for the tool, if found. */
	globals_dir: string | null;
	/** A prefix applied to the file names of globally installed packages. */
	globals_prefix: string | null;
	/** Arguments passed after `--` that was directly passed to the tool's binary. */
	passthrough_args: string[];
}

/** Output returned from the `pre_run` hook. */
export interface RunHookResult {
	/** Additional arguments to append to the running command. */
	args: string[] | null;
	/**
	 * Additional environment variables to pass to the running command.
	 * Will overwrite any existing variables.
	 */
	env: Record<string, string> | null;
}

/** Input passed to the `build_instructions` function. */
export interface BuildInstructionsInput {
	/** Current tool context. */
	context: ToolContext;
}

/** Source code is contained in an archive. */
export interface ArchiveSource {
	/** A path prefix within the archive to remove. */
	prefix: string | null;
	type: 'archive';
	/** The URL to download the archive from. */
	url: string;
}

/** Source code is located in a Git repository. */
export interface GitSource {
	/** The branch/commit/tag to checkout. */
	reference: string;
	/** Include submodules during checkout. */
	submodules: boolean;
	type: 'git';
	/** The URL of the Git remote. */
	url: string;
}

export type SourceLocation = ArchiveSource | GitSource;

/** A command and its parameters to be executed as a child process. */
export interface CommandInstruction {
	/** List of arguments. */
	args: string[];
	/** The binary on `PATH`. */
	bin: string;
	/** The working directory. */
	cwd: string | null;
	/** Map of environment variables. */
	env: Record<string, string>;
}

export type BuildInstruction = {
	type: 'make-executable';
	instruction: string;
} | {
	type: 'move-file';
	instruction: [string, string];
} | {
	type: 'remove-dir';
	instruction: string;
} | {
	type: 'remove-file';
	instruction: string;
} | {
	type: 'request-script';
	instruction: string;
} | {
	type: 'run-command';
	instruction: CommandInstruction;
};

export type BuildRequirement = {
	type: 'command-exists-on-path';
	requirement: string;
} | {
	type: 'manual-intercept';
	requirement: string;
} | {
	type: 'git-config-setting';
	requirement: [string, string];
} | {
	type: 'git-version';
	requirement: string;
} | {
	type: 'python-version';
	requirement: string;
} | {
	type: 'ruby-version';
	requirement: string;
} | {
	type: 'xcode-command-line-tools';
	requirement: 'xcode-command-line-tools';
} | {
	type: 'windows-developer-mode';
	requirement: 'windows-developer-mode';
};

/** Architecture of the system environment. */
export type SystemArch = 'x86' | 'x64' | 'arm' | 'arm64' | 'longarm64' | 'm68k' | 'mips' | 'mips64' | 'powerpc' | 'powerpc64' | 'riscv64' | 's390x' | 'sparc64';

export type DependencyName = string | Record<string, string> | string[];

/** Package manager of the system environment. */
export type SystemPackageManager = 'pkg' | 'pkgin' | 'apk' | 'apt' | 'dnf' | 'pacman' | 'yum' | 'brew' | 'choco' | 'scoop';

/** Operating system of the current environment. */
export type SystemOS = 'android' | 'dragonfly' | 'freebsd' | 'ios' | 'linux' | 'macos' | 'netbsd' | 'openbsd' | 'solaris' | 'windows';

/** Configuration for one or many system dependencies (packages). */
export interface DependencyConfig {
	/** Only install on this architecture. */
	arch: SystemArch | null;
	/** The dependency name or name(s) to install. */
	dep: DependencyName;
	/** Only install with this package manager. */
	manager: SystemPackageManager | null;
	/** Only install on this operating system. */
	os: SystemOS | null;
	/** Install using sudo. */
	sudo: boolean;
	/** The version to install. */
	version: string | null;
}

export type SystemDependency = string | string[] | DependencyConfig | Record<string, string>;

/** Output returned by the `build_instructions` function. */
export interface BuildInstructionsOutput {
	/** Link to the documentation/help. */
	helpUrl: string | null;
	/**
	 * List of instructions to execute to build the tool, after system
	 * dependencies have been installed.
	 */
	instructions: BuildInstruction[];
	/**
	 * List of requirements that must be met before dependencies are
	 * installed and instructions are executed.
	 */
	requirements: BuildRequirement[];
	/** Location in which to acquire the source files. */
	source: SourceLocation | null;
	/**
	 * List of system dependencies that are required for building from source.
	 * If a dependency does not exist, it will be installed.
	 */
	systemDependencies: SystemDependency[];
}

/** Libc being used in the system environment. */
export type SystemLibc = 'gnu' | 'musl' | 'unknown';

/** Target where host logs should be written to. */
export type HostLogTarget = 'stderr' | 'stdout' | 'tracing';

/** Input passed to the `host_log` host function. */
export interface HostLogInput {
	data: Record<string, unknown>;
	message: string;
	target: HostLogTarget;
}

/** Input passed to the `exec_command` host function. */
export interface ExecCommandInput {
	/** Arguments to pass to the command. */
	args: string[];
	/** The command or script to execute. */
	command: string;
	/** Environment variables to pass to the command. */
	env: Record<string, string>;
	/** Mark the command as executable before executing. */
	set_executable: boolean;
	/** Stream the output instead of capturing it. */
	stream: boolean;
	/** Override the current working directory. */
	working_dir: string | null;
}

/** Output returned from the `exec_command` host function. */
export interface ExecCommandOutput {
	command: string;
	exit_code: number;
	stderr: string;
	stdout: string;
}

/** Information about the host environment (the current runtime). */
export interface HostEnvironment {
	arch: SystemArch;
	home_dir: string;
	libc: SystemLibc;
	os: SystemOS;
}

/** Information about the current testing environment. */
export interface TestEnvironment {
	ci: boolean;
	sandbox: string;
}