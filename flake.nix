{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    utils,
  }:
    utils.lib.eachDefaultSystem (
      system: let
        pkgs = import nixpkgs {inherit system;};
        version = "0.0.0";
        python-with-fastapi = pkgs.python311.withPackages (po:
          with po; [
            bcrypt
            databases
            fastapi
            passlib
            pydantic
            sqlalchemy
            uvicorn
          ]);
      in rec {
        devShells = {
          backend = pkgs.mkShell {
            packages = with pkgs; [
              python-with-fastapi
            ];
          };
          frontend = pkgs.mkShell {
            packages = with pkgs; [
              nodePackages.prettier
              caddy
              nodejs_22
              nodePackages.npm
              typescript

              # Development utilities
              bat
              fzf
              helix
              mdcat
              nil
              ripgrep
              tmux

              # Container tools
              podman
              skopeo
            ];
          };
        };
      }
    );
}
